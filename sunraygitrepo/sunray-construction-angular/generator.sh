echo "First Arg: $1"

IFS=","
while read sl type module component;
do    
    #echo "ng g c --project sunray-web modules/sunray/ui/modules/app/modules/$module/$component --skip-import"
    if [ "$type" == "page" ]; then
      ng g c --project sunray-web modules/sunray/ui/modules/app/modules/$module/$component-$type --skip-import
    else
      ng g c --project sunray-web modules/sunray/ui/modules/app/modules/$module/$component --skip-import
    fi 
done < $1
