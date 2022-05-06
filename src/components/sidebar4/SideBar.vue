<template>
 <div class="sidebar">
    <ul class="sidebar__nav">
          <li
        :class=' { "selected": selected === 0 } '
        @click='changeSelected(0)' 
        >
        <i class='fas fa-th'></i>
        Dashboard 
        </li>
        <li
        :class=' { "selected": selected === 1 } '
        @click='changeSelected(1)' >
        <i class='fas fa-paperclip'></i>
        Links
        </li>
        <li
        :class=' { "selected": selected === 1 } '
        @click='changeSelected(1)' >
        <i class='fas fa-paperclip'></i>
        Visualization
        </li>
        <li
        :class=' { "selected": selected === 1 } '
        @click='changeSelected(1)' >
        <i class='fas fa-paperclip'></i>
        Settings
        </li>
    </ul>
  </div>
</template>


<script>
  import { ref } from 'vue'
export default {
  setup() {
    const selected = ref(0); // index of the selected el

     const changeSelected =  function(i) {
      selected.value = i;
    };
    return {
      changeSelected,
      selected,
    };
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
    width: 300px;
    font-size: 1.2em;
    background-color: #fff;
    padding: 30px 0 0 30px;
    box-sizing: border-box;
    float: left;
  }

  ul.sidebar__nav {
    width: 100%;
    position: relative;

    li {
      margin-bottom: 10px;
      padding: 10px 0;
      font-size: 0.9em;
      color: #d2dae2;
      cursor: pointer;
      .selected {
        color: #4bcffa;
      }

      i {
        width: 40px;
        color: inherit;
      }
    }

  }
</style>