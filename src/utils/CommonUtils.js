class CommonUtils {
    static getBase64(file) {
        return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve (reader.result);
        };
        reader.onerror = function (error) {
          reject ('Error: ', error);
        };
        })
        
      }
}

export default CommonUtils;