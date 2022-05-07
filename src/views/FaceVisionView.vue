
<template>
  <v-row justify="center">
    <v-dialog v-model="FaceInfo.window" persistent max-width="500px">
      <v-card>
        <v-img :src="FaceInfo.img_url" />
        <v-card-title class="text-h5">
          성별 : {{FaceInfo.sex}}<br/>
          나이 : {{FaceInfo.age}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="FaceInfo.window = false">
            닫 기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'FaceVision',
	props: {
		FaceInfo: Object,
	},
}
</script>