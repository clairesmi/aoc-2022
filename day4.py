section_data = open('day4.txt', 'r').read().split('\n')

def sort_sublists_by_greatest_diff(x):
    return sorted(x, key=lambda y: int(y[1] - y[0]), reverse=True) 

def sort_sublists_by_lowest_starting_int(x):
    return sorted(x, key=lambda y: int(y[0])) 


def sort_data(question):
    data_to_ints = []
    for x in section_data:
        x = (x.split(','))
        x = [[int(z) for z in y.split('-')] for y in x]
        if question == 'part 1':
           x = sort_sublists_by_greatest_diff(x)
           data_to_ints.append(x)
        elif question == 'part 2':
            x = sort_sublists_by_lowest_starting_int(x)
            data_to_ints.append(x)
    return data_to_ints


def compare_intervals(question):
    overlap = 0
    data = sort_data(question)
    for x in data:
        if question == 'part 1':
            if x[0][0] <= x[1][0] and x[0][1] >= x[1][1]:
                overlap += 1 
        elif question == 'part 2':   
            if x[1][0] <= x[0][1]:
                overlap += 1
    print(overlap)
    return overlap

compare_intervals('part 1')
compare_intervals('part 2')