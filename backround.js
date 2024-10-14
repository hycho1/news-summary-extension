// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'fetchData') {
//     var client_id = '1F1hHOT4obL85Nl8WY35';
//     var client_secret = 'lpCrfwcbsp';
//     fetch('https://openapi.naver.com/v1/search/news.json?query=노벨문학상', {
//       headers: {
//         'X-Naver-Client-Id': client_id,
//         'X-Naver-Client-Secret': client_secret,
//       }
//     })
//     .then(response => response.json())
//     .then(data => sendResponse({ data }))
//     .catch(error => sendResponse({ error: error.message }));
//     return true;  // 응답을 비동기로 처리하겠다는 의미
//   }
// });