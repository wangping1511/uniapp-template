<script setup>
const { locale } = useI18n()
</script>

<template>
  <view class="text-14 text-#9c9c9c">
    <text>{{ $t('hello') }}</text>
    <text>{{ locale }}</text>
  </view>
</template>
