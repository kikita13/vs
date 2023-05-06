export const openLink = (url) => window.open(url, "_blank");
export const openPage = data => {data.first_name
  ? openLink(`https://vk.com/id${data.from_id}`)
  : openLink(`https://vk.com/club${Math.abs(data.owner_id)}`);}
export const openPost = (data) => {openLink(`https://vk.com/wall${data.owner_id}_${data.id}`)}