const jsonText = '{"name":"HARSHIT GOYAL"}';

try {
    const student = JSON.parse(jsonText);
    console.log(student);
} catch (error) {
    console.log("Invalid JSON");
}
