<template>
  <div>
    <FaceVision :FaceInfo="FaceInfo" />
		<div class="d-flex flex-wrap-reverse">
			<table>
				<tr>
					<td><v-text-field height="50px" v-model="search" @keyup.enter="callImg"></v-text-field></td>
					<td><v-btn large color="success" @click="callImg">검색</v-btn></td>
				</tr>
			</table>
		</div>        
			<table>
					<tr>
							<th>제목</th>
							<th>이미지</th>
					</tr>
					<tr v-for="(item, index) in list" :key="index">
							<td>
									<a :href="item.doc_url" target='_blank'>
											{{item.display_sitename}}
									</a>
							</td>
							<td>
									<img :src="item.thumbnail_url" @click="callFaceVision(index)">
							</td>
					</tr>
			</table>
    </div>
</template>

<script>
import FaceVision from './FaceVisionView.vue'
import axios from 'axios'

export default {
    components: {
        FaceVision,
    },
    data : ()=> ({
        FaceInfo : {
            window: false,
            img_url : '',
            sex : '',
            age : '',
        },
        search : '',
        list : [],
        img_url : 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/22/ee906ddf-59aa-4bdc-8fdf-0e57b3e01579.jpg'
    }),

    methods : {
        callImg() {
            axios.get(`https://dapi.kakao.com/v2/search/image?query=${this.search}`,{
                headers: {
                    Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
                }
            }).then(response=>{
                this.list = response.data.documents;
            }).catch(error=>{
                console.error(error);
            });
        },
        callFaceVision(index){
            this.FaceInfo.img_url = this.list[index].image_url;
            axios.get(`https://dapi.kakao.com/v2/vision/face/detect?image_url=${this.list[index].image_url}`, {
                headers: {
                    Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`,
                    'Content-Type' : `application/x-www-form-urlencoded`,
                },
            }).then(response=>{
                if(response.status === 200){
                    this.FaceInfo.window = true;
                    this.FaceInfo.sex = response.data.result.faces[0].facial_attributes.gender.male > response.data.result.faces[0].facial_attributes.gender.female ? '남성' : '여성';
                    this.FaceInfo.age = response.data.result.faces[0].facial_attributes.age;
                }
            }).catch(error=>{
                console.error(error);
            });
        }
    }
}
</script>