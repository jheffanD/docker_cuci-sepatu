# Stage 1: Build the application
FROM node:18-alpine AS build

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke direktori kerja
COPY package.json ./
COPY package-lock.json ./

# Menginstal dependensi proyek
RUN npm install

# Menyalin semua file dari proyek ke direktori kerja
COPY . .

# Membangun aplikasi untuk produksi
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin hasil build dari stage sebelumnya
COPY --from=build /app/build ./build

# Menyalin package.json dan package-lock.json untuk produksi
COPY --from=build /app/package*.json ./

# Menginstal server statis seperti serve
RUN npm install -g serve


# Mengekspos port yang digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan server
CMD ["npm", "start"]

LABEL maintainer="jheffan451@gmail.com"
