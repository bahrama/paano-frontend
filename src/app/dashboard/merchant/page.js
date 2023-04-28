"use client"
import CustomGrid from "@/components/customGrid/CustomGrid";
import Dashboard from "@/components/dashboard/Dashboard";
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";
const Merchant = () =>{
    const toast = useRef(null);
    const ProductService = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: '666666666-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'ttttttttttt-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        }
    ];
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };
    return(
        <>

            <Dashboard>
                <div className="container">
                 <CustomGrid dataGrd = {ProductService}/>
                </div>
                <div className="container">
                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Toast ref={toast} />
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                            <Controller
                                name="value"
                                control={control}
                                rules={{ required: 'Name - Surname is required.' }}
                                render={({ field, fieldState }) => (
                                    <>
                                        <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />
                            </div>
                            <div>
                                <Controller
                                    name="value"
                                    control={control}
                                    rules={{ required: 'Name - Surname is required.' }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>
                            <div>
                                <Controller
                                    name="value"
                                    control={control}
                                    rules={{ required: 'Name - Surname is required.' }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>
                            <div>
                                <Controller
                                    name="value"
                                    control={control}
                                    rules={{ required: 'Name - Surname is required.' }}
                                    render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                            <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'Name - Surname is required.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name}>Name - Surname</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            <Button label="ذخیره" type="submit" icon="pi pi-check" className="bg-luster-2"/>
                        </form>
                    </section>
                </div>
            </Dashboard>

            </>
    )
}
export default Merchant;