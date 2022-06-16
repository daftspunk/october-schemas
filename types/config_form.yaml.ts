import { FieldsRoot } from "./fields.yaml"

export interface ConfigFormRoot {
    // required
    name: string,
    form: string | object,
    modelClass: string

    // pages
    create?: {
        title: string,
        form?: string | FieldsRoot,
        redirect?: string,
        redirectClose?: string,
        customMessages?: {
            flashCreate?: string,
        }
    },
    update?: {
        title: string,
        form?: string | FieldsRoot,
        redirect?: string,
        redirectClose?: string,
        customMessages?: {
            notFound?: string,
            flashUpdate?: string,
            flashDelete?: string,
        }
    },
    preview?: {
        title: string,
        form?: string | FieldsRoot,
        customMessages?: {
            notFound?: string,
        }
    }

    // optional
    defaultRedirect?: string,
    customMessages?: {
        notFound?: string,
        flashCreate?: string,
        flashUpdate?: string,
        flashDelete?: string,
    },
    permissions?: {
        modelCreate?: string,
        modelUpdate?: string,
        modelDelete?: string,
        modelPreview?: string,
    },
}
