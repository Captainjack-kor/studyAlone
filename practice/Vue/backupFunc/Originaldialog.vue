// <v-row
//     class="popupEffect"
//     :class="$mq"
//   >
//     <v-row
//       v-for="(el, index) in newPopupInfo" 
//       :key="index"
//     >
//       <v-row 
//         justify="center" 
//       >
//         <v-card
//           max-width="500"
//           height="500"
//           rounded="lg"
//         >
//           <v-card> 
            
//             <v-card-title class="text-h5">
//               <v-col>
//                 <v-row >
//                   {{ el.title }}

//                   <v-spacer></v-spacer>
//                   <v-btn
//                     color="green darken-1"
//                     text
//                     @click="closePopup(el.idx)"
//                   >
//                     닫기
//                   </v-btn>
//                 </v-row>
                          
//               </v-col>
//             </v-card-title>
//             <v-card-text>
//               <v-img :src="el.img_url" alt="" /> 
//               {{ el.content }}
//              </v-card-text>
//             <v-card-actions class="white">
//               <v-spacer></v-spacer>
//               <!-- <v-checkbox
//                 v-model="checkbox"
//                 :label="desc"
//               ></v-checkbox> -->

//               <v-col
//                 class="blockPopupBtn"
//               > 
//                 <span class="desc" @click="[/*dialog = false,*/ donotWatchAnymore(el.idx)]">
//                   {{ desc }}
//                 </span>
//               </v-col>
//             </v-card-actions>
//           </v-card>
//         </v-card>
//       </v-row>
//     </v-row>
// </v-row> 