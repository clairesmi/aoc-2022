import operator
section_data = open('day4.txt', 'r').read().split('\n')

def sort_data():
    data_to_ints = []
    for x in section_data:
        x = (x.split(','))
        x = [[int(z) for z in y.split('-')] for y in x]
        x.sort(key=lambda y: int(y[1] - y[0]), reverse=True) 
        data_to_ints.append(x)
    return data_to_ints


def compare_intervals():
    total_overlapping = 0
    data = sort_data()
    for x in data:
        if x[0][0] <= x[1][0] and x[0][1] >= x[1][1]:
            total_overlapping += 1
compare_intervals()