export function fileToBase64(file:File, callback:Function) {
    const reader = new FileReader();
    reader.onload = function (event:any) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}