<template>
    <div>
        {{userInfo}}
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userInfo"])
  }
}
</script>