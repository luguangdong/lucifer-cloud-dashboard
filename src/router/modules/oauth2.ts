// 认证模块
const oauth2Router= [
	{
		path: "/oauth2",
		component:  () => import("@/layout/index.vue"),
		redirect: "/oauth2/index",
		children: [
			{
				path: "/oauth2/index",
				name: "oauth2",
				component: () => import("@/views/oauth2/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: false,
					title: "认证系统",
					key: "oauth2"
				}
			}
		]
	}
];

export default oauth2Router;
