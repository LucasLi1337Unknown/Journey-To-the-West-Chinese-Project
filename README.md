# 西游造物 ·《西游记》小组活动

同学互动网站初稿 V0.2。小组网站名称与 Logo 均为暂定，可继续修改。

- GitHub Pages：https://lucasli1337unknown.github.io/Journey-To-the-West-Chinese-Project/
- Vercel 项目：xiyou-zaowu（部署状态以实际返回为准）https://xiyou-zaowu.vercel.app/
- Netlify：已附 netlify.toml，需通过已登录账号导入此仓库。https://xiyou-zaowu.netlify.app/

## 已确认的资料

小组选择第五项：制作公共手办，赠送给老师与同学。设计为孙悟空大战青狮精。
成员：August Liu、Lucas Li、Jasper Zhu、Jeff Feng、Junyi Yao、Justin Liu、George Shi。
概念图为 AI 生成参考，非实物照片。具体分工、尺寸、费用、截止日、赠送数量和试打状态待确认。

## 功能

- 手办概念图与人物档案，原著阅读链接。
- 随机五题知识闯关，金箍棒停点小游戏，本机通关文牒。
- Supabase 共享留言与两项投票，三种静态托管共用后端。
- 已预填的项目计划表：本机自动保存、Markdown 导出、JSON 备份恢复、打印。
- 8 页课堂网页演示，Logo SVG 与概念图下载。

没有伪造同学留言、投票或学校资料。未找到正式项目 PPT/最终 STL，因此未冒充提供下载。

## 数据与边界

留言昵称及内容公开，请勿输入个人联系方式。投票按浏览器标识每题一次，仅用于轻松互动，非实名投票；可被换浏览器绕过。不收集 IP 或精确位置。各域名本地草稿与印章独立，留言票数共享。
数据库仅新增 jtw_messages 和 jtw_votes 两表，RLS 已启用；公共角色可读取公开字段、插入受约束数据，不能修改或删除。客户端只使用 publishable key。
留言墙最多展示最近 60 条，每 30 秒轮询；异常会显示错误，不伪装提交成功。初稿限频只在本机，公开推广前需补充服务器限频、验证码和审核。

## 编辑与发布

无需构建。index.html 为页面，style.css 为样式，app.js 为交互，presentation.html 为演示。
GitHub Pages 保持 main / root 分支发布。Netlify 选择无构建命令，发布目录为根目录。
Vercel 使用 Other / 无框架，部署相同文件。

文案中的尺寸与进度请在事实确认后更新。学校正式表格与 PPT 请后续提供后再替换。
