<template>
  <div id="container" ref="container">
    <div id="text" ref="text">
      {{ premitiveText }}
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue'

const container = ref(null)

const text = ref(null)

const premitiveText = ref('agsduasgdagsydgashdjgsdhgsdhfgshdfgjhsdfgsdhfgshfgsdfgjhfshdfhwuashidjashdashdasdhjasjhj')

const cssEntirely = ref(true)

const isHouzhui = ref(true)
const startEllipsisLine = ref(100)
const suffix = ref(true)

onMounted(() => {
  nextTick(() => {
    autoElipais(container.value, text.value)
  })
})

function autoElipais(container, textNode) {
  const str = premitiveText.value; //1.拿到的所有文字信息
  textNode.textContent = str; //2.将所有文字放入到我们的 span 标签中
  container.style.whiteSpace = "nowrap"; //3.先将文字全部放入到《一行》中，为了计算整体宽度
  container.style.width = "fit-content"; //4. 给 container 设置 fit-content 属性，就可以拿到正确的内容宽度
  const containerWidth = container.clientWidth; //5. 拿到了 container 的宽度
  const parent = container.parentElement; // 拿到外部父元素的宽度
  const parentWidth = parent?.clientWidth || parent?.offsetWidth;
  if (containerWidth <= parentWidth) {
    //如果container 的宽度《小于》父元素的宽度，不做任何处理
    textNode.textContent = str;
    return;
  } else if (cssEntirely.value) {
    container.style.width = parentWidth + "px";
    container.style.whiteSpace = "nowrap";
    container.style.textOverflow = "ellipsis";
    container.style.overflow = "hidden";
    return;
  } else {
    const textWidth = textNode.offsetWidth; //1. 拿到文字节点的宽度
    const strNumer = str.length; //2. 拿到文字的数量
    const avgStrWidth = textWidth / strNumer; //3. 拿到平均每个文字多少宽度
    const canFitStrNumber = Math.floor(
      (parentWidth * props.startEllipsisLine) / avgStrWidth //4. 根据父元素的宽度来计算出可以容纳多少文字
    );

    const shouldDelNumber = strNumer - canFitStrNumber + 1.5; //1. 算出需要删除几个文字（1.5是为了省略号的宽度
    const delEachSide = shouldDelNumber / 2; //2. 因为要保留中间,所以我们不能只从开头删除，也需要从两头删除
    const endLeft = Math.floor(strNumer / 2 - delEachSide); //3. 因为下面要用到 slice 所以需要计算出 index
    const startRight = Math.ceil(strNumer / 2 + delEachSide); //4. 和上面同理

    switch (suffix.value) {
      case true: {
        textNode.textContent =
          str.slice(0, endLeft) + "..." + str.slice(startRight);
        break;
      }
      case false: {
        textNode.textContent = str.slice(0, -shouldDelNumber) + "...";

        break;
      }
    }
    container.style.wordBreak = "break-all";
    container.style.whiteSpace = "normal";
  }
}
</script>
<style lang="less" scoped></style>
