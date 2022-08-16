// import axios, {AxiosInstance} from "axios";


// // 유저의 기본 주소 불러오기
// export const getLocation = async () => {
//     const response = await axios.get(`/location/default`);
//     return response.data.result;
// };

// // 유저의 주소 목록 호출
// export const getLocationList = async () => {
//     const response = await axios.get(`/location/list`);
//     return response.data.result;
// };

// // 유저의 주소 추가
// export const addLocation = async (data: {
//     address : string;
//     lat : number;
//     lng : number;
//   }) => {
//     const response = await axios.post('/location/add', data);
//     return response.data;
//   };

// // 유저의 기본 주소 변경
// export const editLocation = async (data: {
//     address : string;
//     lat : number;
//     lng : number;
//   }) => {
//     const response = await axios.post('/location/change/default', data);
//     return response.data;
//   };

// // 유저의 지정된 주소 삭제
// export const deleteLocation = async () => {
//     const response = await axios.patch(`/location/delete`);
//     console.log('기존 주소 삭제', response.data);
//     return response.data;
//   };