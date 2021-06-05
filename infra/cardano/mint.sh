# The code used throughout pertains to the Mary Testnet.
# For the mainnet, replace --network-magic 3 with --mainnet in all commands.
# This code was copied from https://docs.cardano.org/en/latest/native-tokens/getting-started-with-native-tokens.html#example-minting-a-new-native-token
# To get ADA for the testnet https://input-output.typeform.com/c/KmeBcnDa
# Additional documentation on the minting process is here https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/multi-assets.md
# docs for minting policies are here https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/simple-scripts.md

docker run --name=cardano -v node-ipc:/ipc -e NETWORK=mainnet inputoutput/cardano-node

# Generate a verification key and a signing key:
cardano-cli address key-gen \
  --verification-key-file pay.vkey \
  --signing-key-file pay.skey
# verify the output
SIGN_KEY=$(cat pay.skey)
echo $SIGN_KEY
cat pay.vkey
VERIFY_KEY=$(pay.vkey)
echo $VERIFY_KEY
# Generate the payment address
cardano-cli address build \
  --payment-verification-key-file $VERIFY_KEY \
  --out-file pay.addr \
  --testnet-magic 3
# verify the address
PAY_ADDRESS=$(cat pay.addr)
# check the address balance is 0
cardano-cli query utxo --address $PAY_ADDRESS --testnet-magic 3 --mary-era
# fund the address
TRANSACTION_ID=$(cardano-cli query utxo --address $PAY_ADDRESS --testnet-magic 3 --mary-era)
#TODO figure out how to parse $TRANSACTION_ID from the output
echo $TRANSACTION_ID
# export the protocol params to a file for later use
cardano-cli query protocol-parameters \
  --mainnet \
  --out-file protocol.json
# Create a minting policy
mkdir policy
cardano-cli address key-gen \
  --verification-key-file policy/policy.vkey \
  --signing-key-file policy/policy.skey
touch policy/policy.script && echo "" >policy/policy.script
echo "{" >>policy/policy.script
echo "  \"keyHash\": \"$(./cardano-cli address key-hash --payment-verification-key-file policy/policy.vkey)\"," >>policy/policy.script
echo "  \"type\": \"sig\"" >>policy/policy.script
echo "}" >>policy/policy.script
# verify we got good output
cat ./policy/policy.script
# Mint the new asset
POLICY_ID=$(cardano-cli transaction policyid --script-file ./policy/policy.script)
# build the raw transaction
cardano-cli transaction build-raw \
  --mary-era \
  --fee 0 \
  --tx-in "$TRANSACTION_ID#0" \
  --tx-out $PAY_ADDRESS+1000000000+"1000000000     $POLICY_ID.codestrap" \
  --mint="1000000000 $POLICY_ID.codestrap" \
  --out-file matx.raw
# verify the transaction file was created
cat matx.raw
# calculate the minimum fee
FEE=$(cardano-cli transaction calculate-min-fee \
  --tx-body-file matx.raw \
  --tx-in-count 1 \
  --tx-out-count 1 \
  --witness-count 2 \
  --testnet-magic 3 \
  --protocol-params-file protocol.json)
# build the raw transaction again with the fee
cardano-cli transaction build-raw \
  --mary-era \
  --fee $FEE \
  --tx-in "$TRANSACTION_ID#0" \
  --tx-out $PAY_ADDRESS+1000000000+"1000000000     $POLICY_ID.codestrap" \
  --mint="1000000000 $POLICY_ID.codestrap" \
  --out-file matx.raw
# verify
cat matx.raw
# sign the transaction
cardano-cli transaction sign \
  --signing-key-file $SIGN_KEY \
  --signing-key-file policy/policy.skey \
  --script-file policy/policy.script \
  --testnet-magic 3 \
  --tx-body-file matx.raw \
  --out-file matx.signed
# verify
cat matx.signed
# submit the transaction
TRANSACTION_HASH=$(cardano-cli transaction submit --tx-file matx.signed --testnet-magic 3)
# check the response for the address in UtXO
cardano-cli query utxo --address $PAY_ADDRESS --testnet-magic 3 --mary-er
# TODO ensure the TX ID is returned in cardano-cli transaction submit

# TODO Send the newly minted tokens to another address
# You can generalize this process for creating wallet addresses and sending tokens
# https://docs.cardano.org/en/latest/native-tokens/getting-started-with-native-tokens.html#send-the-new-native-asset-to-another-address
mkdir recipient
# generate the keypair
cardano-cli address key-gen \
  --verification-key-file recipient/recipientpay.vkey \
  --signing-key-file recipient/recipientpay.skey
# Derive the payment address
cardano-cli address build \
  --payment-verification-key-file recipient/recipientpay.vkey \
  --out-file recipient/recipientpay.addr \
  --testnet-magic 3
PAYMENT_ADDRESS=$(cat recipient/recipientpay.addr)
# Send 1 codestrap to the recipient address
cardano-cli transaction build-raw \
  --mary-era \
  --fee 0 \
  --tx-in "$TRANSACTION_HASH#0" \
  --tx-out $PAYMENT_ADDRESS+10000000+"1 $POLICY_ID.codestrap" \
  --tx-out $PAY_ADDRESS+999821915+"999000000 $POLICY_ID.codestrap" \
  --out-file rec_matx.raw
# Calculate the minimum fee
TRANSFER_FEE=$(cardano-cli transaction calculate-min-fee \
  --tx-body-file rec_matx.raw \
  --tx-in-count 1 \
  --tx-out-count 2 \
  --witness-count 1 \
  --testnet-magic 3 \
  --protocol-params-file protocol.json)
# insert the fee
cardano-cli transaction build-raw \
  --mary-era \
  --fee $TRANSFER_FEE \
  --tx-in "$TRANSACTION_HASH#0" \
  --tx-out $PAYMENT_ADDRESS+10000000+"1 $POLICY_ID.codestrap" \
  --tx-out $PAY_ADDRESS+999821915+"999000000 $POLICY_ID.codestrap" \
  --out-file rec_matx.raw
# sing the transaction
cardano-cli transaction sign \
  --signing-key-file pay.skey \
  --testnet-magic 3 \
  --tx-body-file rec_matx.raw \
  --out-file rec_matx.signed
# submit the transaction
cardano-cli transaction submit --tx-file rec_matx.signed --testnet-magic 3
# Check the recipient address, The recipient address we created now has 10000000 Lovelace and 1 codestrap.
cardano-cli query utxo --address $PAYMENT_ADDRESS --testnet-magic 3 --mary-era
# Check the Sender address, The sender address now has 989643522 Lovelace and 999999999 codestrap
cardano-cli query utxo --address $PAY_ADDRESS --testnet-magic 3 --mary-era
