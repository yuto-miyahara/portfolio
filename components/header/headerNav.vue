<script setup lang="ts">
const isExpand = ref(false)
const buttonLabel = ref('メニューを開く')

const switchExpand = () => {
  isExpand.value = !isExpand.value
  buttonLabel.value = isExpand.value ? 'メニューを閉じる' : 'メニューを開く'
}

const closeMenu = (event: any) => {
  const headerElement = document.querySelector('header')

  if (headerElement && !headerElement.contains(event.target)) {
    isExpand.value = false
    buttonLabel.value = 'メニューを開く'
  }
}

if (process.client) {
  window.addEventListener('click', closeMenu)
}

if (process.client) {
  window.addEventListener('keydown', (event) => {
    const handlerElement = document.querySelector('#headerNav')
    const button = document.querySelector('button[aria-controls=headerNav]')

    if (handlerElement && handlerElement.contains(document.activeElement) && event.key === 'Escape') {
      isExpand.value = false
      buttonLabel.value = 'メニューを開く'

      if (button) {
        (button as HTMLElement).focus()
      }
    }
  })
}
</script>

<template>
  <button :aria-label="buttonLabel" aria-controls="headerNav" :aria-expanded="isExpand" @click="switchExpand">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav id="headerNav" aria-label="メニュー" :data-open="isExpand">
    <div>Menu</div>

    <ul>
      <li>
        <NuxtLink to="/profile">プロフィール</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/skill">スキル</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/works">制作事例</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
button {
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  position: fixed;
  top: 16px;
  right: 16px;
  @include transition;
  @include pc {
    display: none;
  }

  span {
    width: 100%;
    height: 5%;
    background: $white;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include transition;
    &:first-child {
      bottom: 75%;
    }
    &:last-child {
      top: 75%;
    }
  }

  &[aria-expanded=true] {
    span {
      &:first-child {
        bottom: 0;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        background: transparent;
      }
      &:last-child {
        top: 0;
        transform: rotate(-45deg);
      }
    }
  }
}

div {
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 0.5em;
  @include pc {
    display: none;
  }
}

nav {
  height: 100%;
  @include sp {
    visibility: hidden;
    height: calc(100svh - $header-height);
    background: rgba($color: $bg-layout, $alpha: .9);
    padding-top: .5em;
    position: fixed;
    top: $header-height;
    right: -100%;
    @include transition;
  }
  @include pc {
    height: 100%;
  }
  &[data-open=true] {
    @include sp {
      visibility: visible;
      right: 0;
    }
  }
}

ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  @include sp {
    flex-direction: column;
    gap: .25em;
    margin-top: 0.5em;
  }
  @include pc {
    height: 100%;
  }
}

li {
  @include sp {
    width: 100%;
  }
  @include pc {
    height: 100%;
  }
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
  font-weight: bold;
  text-decoration: none;
  @include transition;
  &[aria-current] {
    color: $bg-layout;
    background: $white;
  }
  @include sp {
    padding: .5em 2em;
    background: rgba($black, .5);
    @include hover {
      color: $primary;
    }
  }
  @include pc {
    height: 100%;
    padding: 1em 2em;
    @include hover {
      color: $primary;
    }
  }
}
</style>
