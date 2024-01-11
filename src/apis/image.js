import { request } from "@/utils"; 


export function getImageListAPI(){
    return request({
        url:'/photos/?client_id=nS532aIAuqAP2QSO2BrEsP6zFGxxIQycN9L-SfpSRkc',
        method:'GET',
    })
}
