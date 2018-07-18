# 一：新建RN项目

`react-native init RNApp `

# 二：iOS、android 设置

#### 1.iOS设置

打开`RNLookPictureApp.xcodeproj-->info.plist(右键打开方式选择SourceCode)`粘贴(系统权限)

```
<key>NSCalendarsUsageDescription</key>
<string>为了更好的体验,请允许访问日历</string>
<key>NSCameraUsageDescription</key>
<string>为了更好的体验,请允许访问您的相机</string>
<key>NSContactsUsageDescription</key>
<string>为了更好的体验,请允许访问您的联系人</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>为了更好的体验,请允许访问位置信息</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>为了更好的体验,请允许访问位置信息</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string></string>
<key>NSMicrophoneUsageDescription</key>
<string>为了更好的体验,请允许访问您的麦克风</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>将图片保存到相册,请允许访问您的相册</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>为了更好的体验,请允许访问您的相册</string>
<key>NSRemindersUsageDescription</key>
<string>为了更好的体验,请允许访问备忘录</string>
<key>UIAppFonts</key>
<array>
	<string>iconfont.ttf</string>
</array>
```

允许http方式

```
<key>NSAppTransportSecurity</key>
<dict>
	<key>NSAllowsArbitraryLoads</key>
	<true/>
	<key>NSExceptionDomains</key>
	<dict>
		<key>localhost</key>
		<dict>
			<key>NSExceptionAllowsInsecureHTTPLoads</key>
			<true/>
		</dict>
	</dict>
</dict>
```

将font(图标)文件夹add file到xcode目录中

#### 2.android设置

打开`AndroidManifest.xml`粘贴（android系统权限）

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
<!-- 打开Camera的权限 -->
<uses-permission android:name="android.permission.CAMERA" />

<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.autofocus" />

<!-- 开启闪光灯权限 -->
<uses-permission android:name="android.permission.FLASHLIGHT" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.GET_TASKS" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

<!--用于进行网络定位-->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<!--用于访问GPS定位-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<!--用于获取wifi的获取权限，wifi信息会用来进行网络定位-->
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
<!--用于申请调用A-GPS模块-->
<uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"/>
<!--用于申请获取蓝牙信息进行室内定位-->
<uses-permission android:name="android.permission.BLUETOOTH"/>
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.WRITE_SETTINGS" />
```

将assets(图标)文件夹拷贝到mian文件夹下

# 三：导入文件夹

将src文件夹导入到根目录下

# 四：替换index.js

替换index.js

# 五：修改index.js里面的文件名

`AppRegistry.registerComponent('appName', () => Enter);`

# 六：新增库(更新到最新版本库)

```
"@remobile/react-native-toast": "^1.0.7", // 提示框
"axios": "^0.18.0", // 网络请求
"immutable": "^3.8.2", // 不可变数据
"moment": "^2.22.1", // 处理时间
"prop-types": "^15.6.1", // 类型
"react-addons-pure-render-mixin": "^15.6.2", // 优化 shouldComponentUpdate
"react-native-audio": "^4.1.3", // 录音
"react-native-blur": "^3.2.2", // 高斯模糊
"react-native-communications": "^2.2.1", // 打电话、发邮件
"react-native-device-info": "^0.21 .5", // 获取设备信息
"react-native-fs": "^2.9.12", // 下载
"react-native-image-picker": "^0.26.10", // 图片选择
"react-native-keyboard-aware-scroll-view": "^0.5.0", // 键盘遮挡输入框
"react-native-material-kit": "^0.5.1", // 好看的小组件，使用方法https://github.com/xinthink/rnmk-demo/blob/master/app/toggles.js
"react-native-side-menu": "^1.1.3", // 侧边栏
"react-native-sound": "^0.10.9", // 播放声音
"react-native-swipeout": "^2.3.3", // 滑动删除cell
"react-native-swiper": "^1.5.13", // 轮播图
"react-native-video": "^2.0.0", // 播放视频
"react-navigation": "1.5.11",
"react-redux": "^5.0.7",
"react_native_countdowntimer": "^1.0.5", // 倒计时
"redux": "^4.0.0",
"redux-actions": "^2.3.2",
"redux-immutable": "^4.0.0", // 让 reducer 处理不可变数据
"redux-logger": "^3.0.6",
"redux-promise": "^0.6.0",
"redux-thunk": "^2.2.0",
"react-native-linear-gradient": "^2.4.0" // 渐变色
```

