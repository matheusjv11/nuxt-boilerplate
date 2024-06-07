<template>
  <div>
    <p v-if="isLoading || !randomUser">Carregando usuário...</p>
    <div v-else class="user-info">
      <ProfilePicture :imagePath="randomUser.picture.medium" />
      <ul>
        <li>
          <strong>Name:</strong>
          {{ `${randomUser.name.first} ${randomUser.name.last}` }}
        </li>
        <li><strong>Email:</strong> {{ randomUser.email }}</li>
        <li><strong>Gender:</strong> {{ randomUser.gender }}</li>
      </ul>
      <button @click="fetchRandomUser">Reload</button>
      <NuxtLink to="/">Initial page</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GetUserUseCase } from "@/random-users/use-cases/getuser.usecase";
import type { UserModel } from "@/random-users/domain/models/user.model";
import ProfilePicture from "../components/profile-picture.vue";

const randomUser = ref<UserModel.Entity | null>();

const isLoading = ref(true);

const fetchRandomUser = async () => {
  try {
    randomUser.value = await new GetUserUseCase.UseCase().execute();
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};

onMounted(() => {
  fetchRandomUser();
});
</script>

<style lang="scss" scoped>
.user-info {
  margin: auto;
  width: fit-content;
  display: grid;
  gap: 1rem;
  padding: 1rem;
  justify-items: center;

  ul {
    list-style: none;
  }
}
</style>
