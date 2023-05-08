export const openLink = (url) => window.open(url, "_blank");
export const openPage = data => {data.first_name
  ? openLink(`https://vk.com/id${data.from_id}`)
  : openLink(`https://vk.com/club${Math.abs(data.owner_id)}`);}
export const openPost = (data) => {openLink(`https://vk.com/wall${data.owner_id}_${data.id}`)}

export const testForTypeAttachment = (attachment) => {
  if(attachment?.type == 'post') {
    testForTypeAttachment(attachment?.attachments)
  } else if(attachment?.type == 'photo') {
    const url = attachment?.photo?.sizes[attachment?.photo?.sizes?.length - 1]?.url;
    return url
  } else if(attachment?.type == 'video') {
    const url = attachment?.video?.image[attachment?.video?.image?.length - 1]?.url;
    return url
  } else if(attachment?.type == 'doc') {
    const url = attachment?.doc?.preview?.photo?.sizes[attachment?.doc?.preview?.photo?.sizes?.length -1]?.url
    return url
  } else if(attachment?.type =='link') {
    const url = attachment?.link?.photo?.sizes[attachment?.link?.photo?.sizes?.length - 1]?.url;
    return url ? url : attachment?.link?.url
  } else if(attachment?.type == 'graffiti') {
    const url = attachment?.graffiti?.photo?.sizes[attachment?.graffiti?.photo?.sizes?.length - 1]?.url;
    return url
  } else if(attachment?.type == 'sticker') {
    const url = attachment?.sticker?.images[attachment?.sticker?.images?.length - 1]?.url;
    return url
  } 
}

export const getImage = (post) => {

    testForTypeAttachment(post)
  
}