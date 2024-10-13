#!/bin/bash

echo "Enter a phrase:"
read phrase

for (( i=0; i<${#phrase}; i++ )); do
    letter=${phrase:$i:1}

    case $letter in
        A|a)
            echo ".-"
            ;;
        B|b)
            echo "-..."
            ;;
        C|c)
            echo "-.-."
            ;;
        D|d)
            echo "-.."
            ;;
        E|e)
            echo "."
            ;;
        F|f)
            echo "..-."
            ;;
        G|g)
            echo "--."
            ;;
        H|h)
            echo "...."
            ;;
        I|i)
            echo ".."
            ;;
        J|j)
            echo ".---"
            ;;
        K|k)
            echo "-.-"
            ;;
        L|l)
            echo ".-.."
            ;;
        M|m)
            echo "--"
            ;;
        N|n)
            echo "-."
            ;;
        O|o)
            echo "---"
            ;;
        P|p)
            echo ".--."
            ;;
        Q|q)
            echo "--.-"
            ;;
        R|r)
            echo ".-."
            ;;
        S|s)
            echo "..."
            ;;
        T|t)
            echo "-"
            ;;
        U|u)
            echo "..-"
            ;;
        V|v)
            echo "...-"
            ;;
        W|w)
            echo ".--"
            ;;
        X|x)
            echo "-..-"
            ;;
        Y|y)
            echo "-.--"
            ;;
        Z|z)
            echo "--.."
            ;;
        *)
            echo $letter
            ;;
    esac

    sleep 0.1
done
