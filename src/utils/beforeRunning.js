// 程序一开始时需要先执行的操作

import { querystringToObj, removeSomeQuery } from '@/utils/url'
import { setSession } from '@/utils/storage'

const queryKeyList = ['token', 'user_id']
const queryObj = querystringToObj(location.href)
queryKeyList.forEach(key => {
  const value = queryObj[key]
  value && setSession(key, value)
})
if (queryKeyList.some(key => queryObj[key])) {
  const targetUrl = removeSomeQuery(queryKeyList)
  location.replace(targetUrl)
}
