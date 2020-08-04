declare interface Resource {
  res_id: number;
  res_name: string;
  uploader: string;
  folder_name: string;
  approved: boolean;
  link: string;
  content?: string;
}
