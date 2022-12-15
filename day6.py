datastream_buffer = open("day6.txt", "r").read()


def get_marker(marker_size):
    for i in range(0, len(datastream_buffer) - marker_size + 1):
        sub_list = datastream_buffer[i : i + marker_size]
        if len(set(sub_list)) == marker_size:
            return i + marker_size


get_marker(4)
get_marker(14)
