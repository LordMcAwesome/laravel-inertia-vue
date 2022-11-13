<template>
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">
                {{ password_label }}
            </span>
        </label>
        <input
            :value="password"
            @input="$emit('update:password', $event.target.value)"
            @keyup="password_check()"
            class="input input-bordered input-sm w-full"
            type="password"
            name="password"
            required
            autocomplete="off"
        />
    </div>
    <div class="form-control w-full">
        <p
            class="frmValidation flex items-center"
            :class="{ 'frmValidation--passed': at_least_eight_chars }"
        >
            <svg
                v-if="at_least_eight_chars"
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
            <svg
                v-else
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            Mind. 8 Zeichen
        </p>
        <p
            class="frmValidation flex items-center"
            :class="{ 'frmValidation--passed': has_uppercase }"
        >
            <svg
                v-if="has_uppercase"
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
            <svg
                v-else
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            Mind. 1 Großbuchstabe
        </p>
        <p
            class="frmValidation flex items-center"
            :class="{ 'frmValidation--passed': has_lowercase }"
        >
            <svg
                v-if="has_lowercase"
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
            <svg
                v-else
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            Mind. 1 Kleinbuchstabe
        </p>
        <p class="frmValidation flex items-center" :class="{ 'frmValidation--passed': has_number }">
            <svg
                v-if="has_number"
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
            <svg
                v-else
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            Mind. 1 Nummer
        </p>
        <p
            class="frmValidation flex items-center"
            :class="{ 'frmValidation--passed': has_special }"
        >
            <svg
                v-if="has_special"
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
            <svg
                v-else
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            Mind. 1 Sonderzeichen
        </p>
    </div>

    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">{{ password_label }}</span>
        </label>
        <input
            :value="password_confirmation"
            @input="$emit('update:password_confirmation', $event.target.value)"
            @keyup="password_check()"
            class="input input-bordered input-sm w-full"
            type="password"
            name="password_confirmation"
            required
            autocomplete="off"
        />
    </div>
    <div class="form-control w-full">
        <p
            class="frmValidation flex items-center"
            :class="{ 'frmValidation--passed': password_confirmed }"
        >
            <svg
                v-if="password_confirmed"
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                ></path>
            </svg>
            <svg
                v-else
                class="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
            </svg>
            Passwörter stimmen überein
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits([
    "update:password",
    "update:password_confirmation",
    "password_validation",
]);
const props = defineProps({
    password: String,
    password_confirmation: String,
    password_label: String,
    password_confirmation_label: String,
});

let at_least_eight_chars = ref(false);
let has_number = ref(false);
let has_lowercase = ref(false);
let has_uppercase = ref(false);
let has_special = ref(false);
let password_confirmed = ref(false);
let password_valid = ref(false);

function password_check() {
    at_least_eight_chars.value = props.password.length > 7;
    has_number.value = /\d/.test(props.password);
    has_lowercase.value = /[a-z]/.test(props.password);
    has_uppercase.value = /[A-Z]/.test(props.password);
    has_special.value = /[!@#\$%\^\&*\)\(+=._-]/.test(props.password);
    password_confirmed.value = props.password === props.password_confirmation;

    password_valid.value =
        at_least_eight_chars.value &&
        has_number.value &&
        has_lowercase.value &&
        has_uppercase.value &&
        has_special.value &&
        password_confirmed.value;
    emit("password_validation", password_valid.value);
}
</script>

<style scoped>
.frmValidation {
    font-size: 13px;
}
.frmValidation--passed {
    color: #717b85;
}
</style>
