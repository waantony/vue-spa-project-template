// 程序一开始时需要先执行的操作

import { removeSomeQuery } from '@/utils/url'

location.replace(removeSomeQuery(['token', 'user_id']))
