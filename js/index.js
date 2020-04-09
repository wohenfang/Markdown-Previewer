(function () {
  const text = `# 一款简单的Markdown编辑器!基于jQuery &marked

  #### 1.标题
  1.1 二级标题
  ## 双#号 + 空格 创建次级标题
  1.2 三级标题
  ### 三#号 + 空格 创建栏目标题
  
  
  #### 2.代码
   2.1 单个代码
  
  可以将HTML代码放在双反引号中间用来显示相应标签 \`<div></div>\`
  
  2.2 代码块
  \`\`\`
  // 可以用3个反引号包裹代码段用于显示:
  
  function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
  return multiLineCode;
  }
  }
  \`\`\`
  #### 3.文本
  3.1 用双星号包裹文字用于加粗 **Strong Text**。
  
  3.2 或者下划线倾斜字体 _italic_.
  
  3.3 双星+下滑线来加粗并倾斜字体 **_both!_**
  
  3.4 使用双波浪号~~crossing stuff out~~.
  
  #### 4.链接
  增加链接的方式是 [我很方博客](https://www.wohenfang.com), 
  
  #### 5.引用
  用大于号用于引用文本
  > 曾经沧海难为水，除却巫山不是云。
  
  #### 6.无序列表
  用于创建list列表的 ol 单破折
  - 苹果是一种水果
  - Java是一种语言
  - 我的博客经常更新以下内容
    - 软件下载.
    - 海量图片.
  
  
  #### 7.有序列表
  用于创建list列表的 ul 数字序号
  1. 这是我们需要准备的第一步
  1. 这是我们需要准备的第二步
  1. 这是我们需要准备的第三步
  - 另外需要注意的有：
   * 学习交流可以加我QQ/WeChat：755475516哦！
  
  [@我很方博客](https://www.wohenfang.com)
  
  [@Marked](https://github.com/markedjs/marked)
`;
  $("#editor").html(text);
  $("#preview").html(marked(text));
  $("#editor").on("input propertychange", function () {
    var newText = $("#editor").val();
    $("#preview").html(marked(newText));
  });
})();