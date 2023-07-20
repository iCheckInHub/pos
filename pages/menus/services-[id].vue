<template>
  <v-card>
    <v-card-item class="pt-7">
      <v-form @submit.prevent="onSaveService">
        <v-row>
          <v-col cols="3">
            <v-card
              height="100%"
              variant="flat"
              :loading="loading"
              class="text-center"
            >
              <v-avatar
                v-if="!service.image"
                size="180"
                icon="mdi-image"
                color="grey-lighten-3"
              >
              </v-avatar>
              <v-avatar v-else :image="service.image" size="180"> </v-avatar>

              <v-card-actions>
                <v-file-input
                  accept="image/*"
                  label="Change Image"
                  variant="filled"
                  prepend-icon=""
                  single-line
                  density="compact"
                  v-model="files"
                ></v-file-input>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="9">
            <v-card :loading="loading" variant="flat">
              <v-sheet :max-height="$vuetify.display.height - 250">
                <v-text-field
                  v-model="service.name"
                  label="Name"
                ></v-text-field>
                <v-textarea
                  v-model="service.description"
                  label="Description"
                  rows="2"
                ></v-textarea>
                <v-row no-gutters>
                  <v-col>
                    <v-text-field
                      v-model.number="service.price"
                      label="Price"
                      prepend-inner-icon="mdi-currency-usd"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model.number="service.duration"
                      label="Duration"
                      type="number"
                      prepend-inner-icon="mdi-timer"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-sheet>
              <v-card-actions>
                <v-switch
                  v-model="service.active"
                  label="Active"
                  color="primary"
                  density="compact"
                  hide-details
                ></v-switch>
                <v-switch
                  v-model="service.top"
                  label="Top"
                  color="primary"
                  density="compact"
                  hide-details
                ></v-switch>
                <v-spacer />
                <v-btn
                  variant="outlined"
                  rounded="pill"
                  width="120"
                  :to="{ name: 'menus' }"
                  >Cancel</v-btn
                >
                <v-btn
                  color="primary"
                  type="submit"
                  :loading="loadingSaveService"
                  variant="flat"
                  rounded="pill"
                  width="120"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center mb-3">
              <strong class="text-secondary">Extras</strong>
              <v-btn
                color="secondary"
                size="small"
                variant="outlined"
                prepend-icon="mdi-plus"
                @click="onEditExtra()"
                >Add extra</v-btn
              >
            </div>
            <template v-for="extra in service.extras">
              <v-card class="mb-5">
                <v-list-item class="bg-grey-lighten-3" lines="two">
                  <v-list-item-title
                    class="font-weight-bold"
                    :class="{ 'text-decoration-line-through': !extra.active }"
                    >{{ extra.name }}</v-list-item-title
                  >

                  <template v-slot:append="{ isActive }">
                    <v-btn
                      color="secondary"
                      size="small"
                      variant="text"
                      @click.stop="onEditExtra(extra)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                      <v-tooltip activator="parent" location="top"
                        >Edit Extra</v-tooltip
                      ></v-btn
                    >
                    <v-btn
                      color="secondary"
                      size="small"
                      variant="text"
                      @click.stop="onEditOption"
                    >
                      <v-icon>mdi-plus</v-icon>
                      <v-tooltip activator="parent" location="top"
                        >Add new option</v-tooltip
                      ></v-btn
                    >
                  </template>
                </v-list-item>
                <v-table
                  :density="'compact'"
                  :class="{ 'text-disabled': !extra.active }"
                >
                  <thead>
                    <tr>
                      <th>Option</th>
                      <th class="text-center">Default</th>
                      <th class="text-right">Duration</th>
                      <th class="text-right">Price</th>
                      <th class="text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <v-hover v-slot="{ isHovering, props }">
                      <tr v-for="option in extra.options">
                        <td
                          :class="{
                            'text-decoration-line-through': !option.active,
                          }"
                        >
                          {{ option.name }}
                        </td>
                        <td class="text-center">
                          <v-checkbox
                            v-if="extra.multiple"
                            v-model="option.default"
                            hide-details
                            density="compact"
                            disabled
                            class="d-flex justify-center"
                          />
                          <v-radio
                            v-else
                            v-model="option.default"
                            disabled
                            class="d-flex justify-center"
                          ></v-radio>
                        </td>
                        <td class="text-right">{{ option.duration }}'</td>
                        <td class="text-right">{{ option.price }}</td>
                        <td class="text-right">
                          <v-btn
                            color="secondary"
                            size="small"
                            variant="text"
                            @click.stop="
                              onEditOption({
                                ...option,
                                extra_id: extra.id,
                              })
                            "
                            :disabled="!extra.active"
                          >
                            <v-icon>mdi-pencil</v-icon>
                            <v-tooltip activator="parent" location="top">
                              Edit option
                            </v-tooltip>
                          </v-btn>
                        </td>
                      </tr>
                    </v-hover>
                  </tbody>
                </v-table>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </v-form>
    </v-card-item>
    <v-card-text>
      <v-dialog v-model="dialogExtra" width="500">
        <v-form @submit.prevent="onSaveExtra">
          <v-card color="white">
            <v-card-title> Extra </v-card-title>
            <v-card-text>
              <v-text-field v-model="extra.name" label="Name"></v-text-field>

              <v-row no-gutters>
                <v-switch
                  v-model="extra.multiple"
                  label="Multiple select"
                  color="primary"
                ></v-switch>
                <v-switch
                  v-model="extra.active"
                  label="Active"
                  color="primary"
                ></v-switch>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="onDeleteExtra" color="error" v-if="extra.id"
                >Delete</v-btn
              >
              <v-spacer />
              <v-btn @click="dialogExtra = false">Close</v-btn>
              <v-btn color="primary" type="submit" :loading="loadingExtra"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
      <v-dialog v-model="dialogExtraOption" width="500">
        <v-form @submit.prevent="onSaveOption">
          <v-card>
            <v-card-title> Option </v-card-title>
            <v-card-text>
              <v-text-field v-model="option.name" label="Name"></v-text-field>
              <v-textarea
                v-model="option.description"
                label="Description"
                rows="2"
              ></v-textarea>
              <v-row no-gutters>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="option.price"
                    label="Price"
                    type="number"
                    prepend-inner-icon="mdi-currency-usd"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model.number="option.duration"
                    label="Duration"
                    type="number"
                    prepend-inner-icon="mdi-timer"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-checkbox
                    v-model="option.active"
                    label="Active"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="6">
                  <v-checkbox
                    v-model="option.default"
                    label="Default option"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="onDeleteOption()" color="error" v-if="option.id"
                >Delete</v-btn
              >
              <v-spacer />
              <v-btn @click="dialogExtraOption = false">Close</v-btn>
              <v-btn color="primary" type="submit" :loading="loadingSaveOption"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
const { params } = useRoute();

const files = ref<File[]>([]);

const { loading, result, onResult } = useGetServiceQuery(
  {
    id: params.id as any,
    store_id: useStore().value,
  },
  {
    enabled: !!params.id && params.id !== 'new',
  }
);

const dialogExtra = ref(false);
const dialogExtraOption = ref(false);

const service = ref({} as TMenuService);
const extra = ref({} as any);
const option = ref({} as any);

onResult(({ data }) => {
  service.value = Object.assign({}, data.getService as any);
});

const { query } = useRoute();

const { mutate: saveService, loading: loadingSaveService } =
  useSaveMenuServiceMutation(() => ({
    variables: {
      input: {
        id: service.value.id,
        name: service.value.name,
        description: service.value.description,
        image: files.value.length ? files.value[0] : undefined,
        price: service.value.price,
        duration: service.value.duration,
        active: service.value.active,
        top: service.value.top,
        store_id: useStore().value,
        menu_id: service.value.menu_id || (query.menu_id as string),
      },
    },
    refetchQueries: ['getService'],
  }));

const { mutate: saveExtra, loading: loadingExtra } =
  useSaveMenuServiceExtraMutation(() => ({
    variables: {
      input: {
        id: extra.value.id,
        name: extra.value.name,
        description: extra.value.description,
        multiple: extra.value.multiple,
        active: extra.value.active,
        service_id: service.value.id as string,
        store_id: useStore().value,
      },
    },
    refetchQueries: ['getService'],
  }));

const { mutate: saveOption, loading: loadingSaveOption } =
  useSaveMenuServiceExtraOptionMutation(() => {
    return {
      variables: {
        input: {
          id: option.value.id,
          name: option.value.name,
          description: option.value.description,
          price: option.value.price,
          duration: option.value.duration,
          active: option.value.active,
          default: option.value.default,
          extra_id: option.value.extra_id,
          store_id: useStore().value,
        },
      },
      refetchQueries: ['getService'],
    };
  });

const { mutate: deleteExtra, loading: loadingDeleteExtra } =
  useDeleteMenuServiceExtraMutation(() => ({
    variables: {
      input: {
        id: extra.value.id,
        store_id: useStore().value,
      },
    },
    refetchQueries: ['getService'],
  }));

const { mutate: deleteOption, loading: loadingDeleteOption } =
  useDeleteMenuServiceExtraOptionMutation(() => ({
    variables: {
      input: {
        id: option.value.id,
        store_id: useStore().value,
      },
    },
    refetchQueries: ['getService'],
  }));

const onSaveService = () => {
  // console.log(files.value[0]);
  // return;
  saveService()
    .then((result) => {
      return useRouter().push({
        name: 'menus-services-id',
        params: { id: result?.data?.saveMenuService?.id as string },
      });
    })
    .catch((error) => console.error(error));
};
const onSaveExtra = () => {
  saveExtra()
    .then(() => {
      dialogExtra.value = false;
    })
    .catch((error) => console.error(error));
};
const onSaveOption = () => {
  saveOption()
    .then(() => {
      dialogExtraOption.value = false;
    })
    .catch((error) => console.error(error));
};

const onEditExtra = (item: any = {}) => {
  extra.value = Object.assign({ active: true, multiple: true }, item);
  dialogExtra.value = true;
};
const onEditOption = (item: any = {}) => {
  option.value = Object.assign({ active: true }, item);
  dialogExtraOption.value = true;
};
const onDeleteExtra = () => {
  deleteExtra()
    .then(() => {
      dialogExtra.value = false;
    })
    .catch((error) => console.error(error));
};

const onDeleteOption = () => {
  deleteOption()
    .then(() => {
      dialogExtraOption.value = false;
    })
    .catch((error) => console.error(error));
};
</script>
