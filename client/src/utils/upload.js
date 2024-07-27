import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "FreeWork");

  try {
    const res = await axios.post("cloudinary://296177229313819:<your_api_secret>@dr59qsljd", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;