export interface GetUserProfileResponse {
  status: string;
  data: UserDataProfile;
}

export interface UserDataProfile {
  _id: string;
  photo_url: string;
  name: string;
  phone_number: string;
  data_status?: string;
}

export interface GetUsersResponse {
  status: string;
  data: UserDataProfile[];
}