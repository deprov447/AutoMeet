#!/bin/bash

clear
echo "This is the onetime configuration menu...";
echo "Please follow thru carefully";
echo ""
echo "> Which browser will you be using? [Hint: 'google-chrome' or 'firefox']";
read browser
echo "> How  many subjects?"
read noofsubs;
declare -a subjects
for ((i=1;i<=noofsubs;i++))
do
{
   echo "> Subject $i name?";
   read sub;
   subjects+=($sub)
}
done
datadata='{"browser": "'$browser'",';
datadata+='"links":{';
echo ""
for ((i=0;i<noofsubs;i++))
do
{
   echo "> link for "${subjects[$i]};
   read link;
   datadata+='"'${subjects[$i]}'":"'$link'",';
}
done
   echo "> link for classroom?";
   read link;
   datadata+='"default" : "'$link'"';
datadata+='}}';

echo $datadata | jq '.' > rad.json

######################################################################

# function ispresent(){
#     ret = "0"
#     for((i=0;i<$noofsubs;i++))
#     do
#     {
#         if [ ${subjects[$1]} -eq $1 ]
#         then
#             echo "one"
#             return "1";
#         fi
#     }
#     return ret;
# }

# read inp
# if [ $inp -eq "1" ]
# then 
#     out "1";
#     echo $?
# fi