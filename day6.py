datastream_buffer = open("day6.txt", "r").read()


def get_marker():
    start = 0
    marker_size = 4
    counter = 0
    temp = 0
    for i in range(start, len(datastream_buffer) - marker_size + 1):
        current_character = datastream_buffer[i]
        for j in range(1, len(datastream_buffer[start:marker_size])):
            comparison = datastream_buffer[i + j]
            if current_character == comparison:
                temp = counter
                counter = i
                if counter - temp >= marker_size:
                    print(counter - marker_size)
                    return counter - marker_size


get_marker()
