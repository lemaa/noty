 const chunkArray = (chunkArray, length) => {
     try {
         const chunkedArray = chunkArray.reduce((resultArray, item, index) => {
             const chunkIndex = Math.floor(index / length);
             if (!resultArray[chunkIndex]) {
                 resultArray[chunkIndex] = [];
             }

             resultArray[chunkIndex].push(item);
             return resultArray;
         }, []);

         return chunkedArray;
     } catch (error) {
         throw (error);
     }

 };


 export default {
     chunkArray
 };