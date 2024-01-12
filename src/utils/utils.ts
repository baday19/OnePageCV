export function fileToBase64(file:File, callback:Function) {
    const reader = new FileReader();
    reader.onload = function (event:any) {
        callback(event.target.result);
    };
    reader.readAsDataURL(file);
}

export function copyToClipboard(text:string) {
    var textarea = document.createElement("textarea"); //创建临时的textarea元素
    textarea.value = text; //设置要复制的内容为指定的文本
    document.body.appendChild(textarea); //添加到页面上
    textarea.select(); //选中文本区域
    try {
        var successful = document.execCommand('copy'); //执行复制命令
        var msg = successful ? '成功' : '失败';
        console.log('已复制到剪贴板', msg);
    } catch (err) {
        console.error('无法复制到剪贴板', err);
    } finally {
        document.body.removeChild(textarea); //移除临时的textarea元素
    }
}
 