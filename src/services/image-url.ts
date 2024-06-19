const getCropImageUrl = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const start = url.indexOf(target);
  const end = start + target.length;
  const str1 = url.slice(0, start);
  const str2 = url.slice(end);
  const result = str1 + "media/crop/600/400/" + str2;
  return result;
};
export default getCropImageUrl;
