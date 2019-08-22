//初始化配置
import axios from "axios";
import { Message } from 'element-ui';
const instance=axios.create({
    timeout:3000
});
instance.interceptors.response.use(function (response) {
    if (response.data.code !== 200) {
        Message.error(response.data.msg);
    }
    return response;
},function (error) {
    Message.error("服务器错误");
    return Promise.reject(error);
});
export {instance};