export interface GetUserProfileResponse {
  status: string;
  data: UserDataProfile;
}

export interface UserDataProfile {
  _id: string | null;
  photo_url: string | null;
  name: string | null;
  phone_number: string | null;
  data_status?: string | null;
  description?: string | null;
}

export interface GetUsersResponse {
  status: string;
  data: UserDataList[];
}

export interface UserDataList {
  _id: string | null;
  photo_url: string | null;
  name: string | null;
  phone_number: string | null;
  data_status: string | null;
  description: string | null;
  is_contact: boolean;
}

export interface SaveContactRequest {
  member_id: string;
}

export interface SaveContactResponse {
  status: string;
  message: string;
}