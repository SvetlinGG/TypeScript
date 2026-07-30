function person(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string]{

    const fullName = middleName
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;

    const transformedHobbies = !hobbies || hobbies.length === 0
        ? '-'
        : hobbies.join(', ');

    const transformWorkInfo = !workInfo
        ? '-'
        : `${workInfo[0]} -> ${workInfo[1]}`

    return [id, fullName, age, transformedHobbies, transformWorkInfo];
    


}
console.log(person(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
//person(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']);
//person(21, 'Joseph', 'Angler', 28);