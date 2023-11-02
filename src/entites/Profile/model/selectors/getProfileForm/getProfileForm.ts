import {StateSchema} from "app/providers/StoreProvider";

export const getProfileForm = (state: StateSchema| any) => state.profile?.form;
