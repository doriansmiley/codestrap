# Staging
aws s3 sync css s3://staging.codestrap.me/css
aws s3 sync img s3://staging.codestrap.me/img
aws s3 sync program s3://staging.codestrap.me/program
aws s3 cp favicon.ico s3://staging.codestrap.me
aws s3 cp index.html s3://staging.codestrap.me
aws cloudfront create-invalidation --distribution-id E29SNEON4KT222 --paths /*

# Prod
aws s3 sync css s3://codestrap.me/css
aws s3 sync img s3://codestrap.me/img
aws s3 sync program s3://codestrap.me/program
aws s3 cp favicon.ico s3://codestrap.me
aws s3 cp index.html s3://codestrap.me
aws cloudfront create-invalidation --distribution-id E22WWRJYNJL6MG --paths /*


