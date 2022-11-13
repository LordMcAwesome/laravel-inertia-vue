### Example integration:

    <PasswordFieldsWithConfirmation
    v-model:password="form.password"
    v-model:password_confirmation="form.password_confirmation"
    password_label="Passwort des ADMIN Users"
    password_confirmation_label="Passwort wiederholen"
    @password_validation="(is_valid) => (password_valid = is_valid)"
    />
    
    ...
    <!-- A button that is only enabled when password matches requirements -->
    <button
        @click="submit"
        class="btn btn-sm btn-success"
        :disabled="!password_valid"
    >
        Anlegen
    </button>

    ...


    <script setup>
    import PasswordFieldsWithConfirmation from "../Utils/PasswordFieldsWithConfirmation.vue";
    import { ref } from "vue";
    ...
    let password_valid = ref(false);
    ...
    </script>

### Result
<img src="Example.png" width="400" style="border: 1px solid grey">