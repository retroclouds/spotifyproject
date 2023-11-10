const flattenObjectValuesIntoArray = (arrOfObjs) => {
    let flattenedObj;
    const flattenedObjsArr = [];
    for (let obj = 0; obj < arrOfObjs.length; obj++) {
      const objValues = Object.values(arrOfObjs[obj]);
      flattenedObj = [...objValues.flat()]
      flattenedObjsArr.push(flattenedObj)
    }
    return flattenedObjsArr;
  };

 export default function filterBooks(searchString, books) {
    let objectsAsArray = flattenObjectValuesIntoArray(books);
    let matchList = []
    for (let i = 0; i < objectsAsArray.length; i++) {
      for (let j = 0; j < objectsAsArray[i].length; j++) {
        if (objectsAsArray[i][j].includes(searchString)) {
          matchList.push(books[i])
  
        }
      }
    }
    return matchList;
  };
