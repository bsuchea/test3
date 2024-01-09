<script>
import Button from "../components/Button.vue";
export default {
    components: { 
        Button
    },
    data(){
        return {
            student: {
                id: '',
                name: '',
                gender: '',
                phone: '',
                address: '',
            },
            studentlist: []
        }
    },
    methods: {
        save(){
            this.student.id  = this.studentlist.length +1;
            this.studentlist.push(this.student);
            this.student = {}
        }
    }
}
</script>
<template>
    <div>
        <h1 class="text-2xl">Student List</h1>
        Name: <input type="text" v-model="student.name" class="border p-2" /> <br />
        Gender:
        <select v-model="student.gender" name="gender" class="border p-2">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <br />
        Phone: <input v-model="student.phone" type="text" class="border p-2" /> <br />
        Address <br>
        <textarea v-model="student.address" cols="30" rows="3" class="border p-2"></textarea> <br>
        
        <Button @click="save">Save</Button>

    </div>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-2 lg:px-4">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-gray-200 border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Name
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Gender
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Phone
                                </th>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ret in studentlist" :key="ret.id" class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {{ ret.id }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{  ret.name }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ ret.gender}}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ ret.phone }}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {{ ret.address }}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
