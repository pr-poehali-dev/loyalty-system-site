
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const businessSchema = z.object({
  name: z.string().min(2, { message: "Название должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  website: z.string().url({ message: "Введите корректный URL сайта" }).optional().or(z.literal("")),
  address: z.string().min(5, { message: "Адрес должен содержать минимум 5 символов" }),
  description: z.string().min(10, { message: "Описание должно содержать минимум 10 символов" }),
});

type BusinessFormValues = z.infer<typeof businessSchema>;

interface BusinessRegistrationFormProps {
  onSuccess?: (data: BusinessFormValues) => void;
}

const BusinessRegistrationForm: React.FC<BusinessRegistrationFormProps> = ({ onSuccess }) => {
  const form = useForm<BusinessFormValues>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      description: "",
    },
  });

  const onSubmit = (values: BusinessFormValues) => {
    console.log(values);
    // В реальном приложении здесь был бы запрос к API
    if (onSuccess) {
      onSuccess(values);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Регистрация бизнеса</CardTitle>
        <CardDescription>
          Зарегистрируйте свой бизнес в системе лояльности Loyal+
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Название компании</FormLabel>
                    <FormControl>
                      <Input placeholder="ООО Компания" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="contact@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (999) 123-45-67" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Веб-сайт</FormLabel>
                    <FormControl>
                      <Input placeholder="https://yourcompany.com" {...field} />
                    </FormControl>
                    <FormDescription>Необязательно</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Адрес</FormLabel>
                  <FormControl>
                    <Input placeholder="г. Москва, ул. Примерная, д. 123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание бизнеса</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Расскажите подробнее о вашем бизнесе..." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Info" className="h-4 w-4 text-blue-500" />
                <p className="text-sm text-muted-foreground">
                  После регистрации вам необходимо выбрать тарифный план
                </p>
              </div>
              
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Зарегистрировать бизнес
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BusinessRegistrationForm;
