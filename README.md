# jsc-styles
> 全局样式

# 全局使用
## 全量导入
```js
// 全部样式 = 重置样式 + 布局样式 + 前景与背景颜色样式 + 间距与尺寸样式 + 形状与字体样式
import 'jsc-styles';
```

## 按需导入
```js
// 重置样式
import 'jsc-styles/reset.css';

// 布局样式
import 'jsc-styles/flex.css';
import 'jsc-styles/text.css';

// 前景与背景颜色样式
import 'jsc-styles/color.css';

// 间距与尺寸样式
import 'jsc-styles/offset.css';
import 'jsc-styles/size.css';

// 形状与字体样式
import 'jsc-styles/border.css';
import 'jsc-styles/font.css';
```

# 局部使用
## 常规样式
```vue
<template>
    <div class="bdrs4 bda bg-warning-light color-warning">
        危险警告
    </div>    
</template>

<style lang="scss" src="jsc-styles/offset.scss" scoped></style>
<style lang="scss" src="jsc-styles/color.scss" scoped></style>
```

## markdown 样式
```vue
<template>
    <div class="markdown-render" v-html="markdownRenderResult"></div>
</template>

<style lang="scss" scoped>
.markdown-render {
    @import '~jsc-styles/markdown.scss';
}
</style>
```

