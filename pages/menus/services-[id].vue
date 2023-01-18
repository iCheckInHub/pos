<template>
  <v-container>
    <v-form @submit.prevent="onSaveMenuService">
      <v-row>
        <v-col cols="3">
          <v-card height="100%" variant="flat" :loading="loading">
            <v-img
              :src="service.image"
              aspect-ratio="1"
              cover
              class="d-flex align-end"
            >
              <v-btn
                block
                rounded="0"
                variant="tonal"
                color="primary"
                prepend-icon="mdi-image"
                >Change image</v-btn
              >
            </v-img>
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
          </v-card>
        </v-col>
        <v-col cols="9">
          <v-card :loading="loading">
            <v-card-title class="px-0">{{
              service.name || 'Service'
            }}</v-card-title>
            <v-sheet :max-height="$vuetify.display.height - 250">
              <v-text-field v-model="service.name" label="Name"></v-text-field>
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
                    prefix="$"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model.number="service.duration"
                    label="Duration"
                    type="number"
                    suffix="minutes"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-sheet>
            <v-card-actions>
              <v-spacer />
              <v-btn variant="outlined" rounded="pill" width="120"
                >Cancel</v-btn
              >
              <v-btn
                color="primary"
                type="submit"
                :loading="loadingSave"
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
          <v-expansion-panels>
            <v-expansion-panel v-for="extra in service.extras">
              <v-expansion-panel-title v-slot="{ expanded }">
                <v-row align="center" justify="space-between">
                  <div>
                    <strong class="text-uppercase">{{ extra.name }}</strong>
                    <p class="text-secondary text-caption">
                      {{ extra.multiple ? 'Multiple select' : 'Single select' }}
                    </p>
                  </div>
                  <v-fade-transition>
                    <v-btn
                      v-if="expanded"
                      :key="extra.id"
                      color="secondary"
                      size="small"
                      variant="outlined"
                      class="mr-5"
                      @click.stop="onEditExtra(extra)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                      <v-tooltip activator="parent" location="top"
                        >Edit this extra</v-tooltip
                      ></v-btn
                    >
                  </v-fade-transition>
                </v-row>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <v-table :density="'compact'">
                  <thead>
                    <tr>
                      <th>Active</th>
                      <th>Option</th>
                      <th class="text-center">Default</th>
                      <th class="text-right">Duration</th>
                      <th class="text-right">Price</th>
                      <th class="text-right"></th>
                    </tr>
                  </thead>
                  <tbody class="mx-n6">
                    <v-hover v-slot="{ isHovering, props }">
                      <tr v-for="option in extra.options">
                        <td class="text-center">
                          <v-icon
                            :icon="
                              option.active
                                ? 'mdi-checkbox-marked'
                                : 'mdi-checkbox-blank-outline'
                            "
                          />
                        </td>
                        <td>{{ option.name }}</td>
                        <td class="text-right">
                          <v-checkbox
                            v-if="extra.multiple"
                            v-model="option.default"
                            hide-details
                            density="compact"
                            :direction="'horizontal'"
                          />
                          <v-radio v-else v-model="option.default"></v-radio>
                        </td>
                        <td class="text-right">{{ option.duration }}'</td>
                        <td class="text-right">{{ option.price }}</td>
                        <td>
                          <v-btn
                            color="secondary"
                            size="small"
                            variant="text"
                            icon
                            @click.stop="
                              onEditExtraOption({
                                ...option,
                                extra_id: extra.id,
                              })
                            "
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
                <v-btn
                  prepend-icon="mdi-plus"
                  @click="onEditExtraOption({ extra_id: extra.id })"
                  variant="outlined"
                  color="secondary"
                  block
                  >Add option</v-btn
                >
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-form>
    <v-dialog v-model="dialogExtra" width="500">
      <v-form @submit.prevent="onSaveMenuServiceExtra">
        <v-card>
          <v-card-title> Extra </v-card-title>
          <v-card-text>
            <v-text-field v-model="extra.name" label="Name"></v-text-field>
            <v-textarea
              v-model="extra.description"
              label="Description"
              rows="2"
            ></v-textarea>
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
            <v-btn color="primary" type="submit">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="dialogExtraOption" width="500">
      <v-form @submit.prevent="onSaveMenuServiceExtraOption">
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
              <v-col>
                <v-text-field
                  v-model.number="option.price"
                  label="Price"
                  type="number"
                  prefix="$"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model.number="option.duration"
                  label="Duration"
                  type="number"
                  prefix="min"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="option.active"
              label="Active"
              hide-details
            ></v-checkbox>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="onDeleteExtraOption()" color="error" v-if="option.id"
              >Delete</v-btn
            >
            <v-spacer />
            <v-btn @click="dialogExtra = false">Close</v-btn>
            <v-btn color="primary" type="submit">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouteParams } from '@vueuse/router';

const { loading, onResult, refetch } = useGetServiceQuery({
  id: useRouteParams('id') as any,
});

const dialogExtra = ref(false);
const dialogExtraOption = ref(false);

const service = ref({} as any);
const extra = ref({} as any);
const option = ref({} as any);

onResult(({ data }) => {
  service.value = Object.assign({}, data.service as any);
});

const { mutate: saveMenuService, loading: loadingSave } =
  useSaveMenuServiceMutation(() => ({
    variables: {
      input: {
        id: service.value.id,
        name: service.value.name,
        description: service.value.description,
        image: service.value.image,
        price: service.value.price,
        duration: service.value.duration,
        active: service.value.active,
        top: service.value.top,
        place_id: service.value.place_id,
      },
    },
    refetchQueries: ['getService'],
  }));

const { mutate: saveMenuServiceExtra, loading: loadingSaveMenuServiceExtra } =
  useSaveMenuServiceExtraMutation(() => ({
    variables: {
      input: {
        id: extra.value.id,
        name: extra.value.name,
        description: extra.value.description,
        multiple: extra.value.multiple,
        active: extra.value.active,
        service_id: service.value.id as string,
        place_id: service.value.place_id,
      },
    },
    refetchQueries: ['getService'],
  }));

const {
  mutate: saveMenuServiceExtraOption,
  loading: loadingSaveMenuServiceExtraOption,
} = useSaveMenuServiceExtraOptionMutation(() => ({
  variables: {
    input: {
      id: option.value.id,
      name: option.value.name,
      description: option.value.description,
      price: option.value.price,
      duration: option.value.duration,
      active: option.value.active,
      extra_id: option.value.extra_id,
      place_id: service.value.place_id,
    },
  },
  refetchQueries: ['getService'],
}));

const {
  mutate: deleteMenuServiceExtra,
  loading: loadingDeleteMenuServiceExtra,
} = useDeleteMenuServiceExtraMutation(() => ({
  variables: {
    input: {
      id: extra.value.id,
      place_id: service.value.place_id,
    },
  },
  refetchQueries: ['getService'],
}));

const {
  mutate: deleteMenuServiceExtraOption,
  loading: loadingDeleteMenuServiceExtraOption,
} = useDeleteMenuServiceExtraOptionMutation(() => ({
  variables: {
    input: {
      id: option.value.id,
      place_id: service.value.place_id,
    },
  },
  refetchQueries: ['getService'],
}));

const onSaveMenuService = () => {
  saveMenuService()
    // .then(() => refetch())
    .catch((error) => console.error(error));
};
const onSaveMenuServiceExtra = () => {
  saveMenuServiceExtra()
    .then(() => {
      dialogExtra.value = false;
    })
    .catch((error) => console.error(error));
};
const onSaveMenuServiceExtraOption = () => {
  saveMenuServiceExtraOption()
    .then(() => {
      dialogExtraOption.value = false;
    })
    .catch((error) => console.error(error));
};

const onEditExtra = (item: any = {}) => {
  extra.value = Object.assign({ active: true, multiple: true }, item);
  dialogExtra.value = true;
};
const onEditExtraOption = (item: any = {}) => {
  option.value = Object.assign({ active: true }, item);
  dialogExtraOption.value = true;
};
const onDeleteExtra = () => {
  deleteMenuServiceExtra()
    .then(() => {
      dialogExtra.value = false;
    })
    .catch((error) => console.error(error));
};

const onDeleteExtraOption = () => {
  deleteMenuServiceExtraOption()
    .then(() => {
      dialogExtraOption.value = false;
    })
    .catch((error) => console.error(error));
};
</script>
