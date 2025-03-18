FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm AS dev

ARG USER=node
ARG JAVA_HOME=java/jdk
ARG ANDROID_HOME=Android/sdk
ARG ANDROID_SDK_TOOLS=$ANDROID_HOME/cmdline-tools
ARG BUILD_TOOLS_VERSION=34.0.0
ARG PLATFORM_VERSION=34
ARG COMMAND_LINE_VERSION=latest

# Dependencies
RUN apt update && apt upgrade -y
RUN apt install -y unzip wget git

RUN git config --global core.autocrlf input

WORKDIR /home/$USER

# JDK
RUN mkdir -p java

RUN wget -O jdk-21.tar.gz https://download.java.net/openjdk/jdk21/ri/openjdk-21+35_linux-x64_bin.tar.gz
RUN tar -xzf jdk-21.tar.gz && rm jdk-21.tar.gz
RUN mv jdk-21 $JAVA_HOME

ENV PATH $PATH:/home/$USER/$JAVA_HOME/bin

# Android SDK
RUN mkdir -p $ANDROID_SDK_TOOLS

RUN wget -O sdk-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
RUN unzip sdk-tools.zip && rm sdk-tools.zip
RUN mv cmdline-tools $ANDROID_SDK_TOOLS/latest/

RUN yes | $ANDROID_SDK_TOOLS/latest/bin/sdkmanager --licenses
RUN $ANDROID_SDK_TOOLS/latest/bin/sdkmanager "build-tools;${BUILD_TOOLS_VERSION}" "platform-tools" "platforms;android-${PLATFORM_VERSION}" "sources;android-${PLATFORM_VERSION}"
RUN $ANDROID_SDK_TOOLS/latest/bin/sdkmanager --install "cmdline-tools;${COMMAND_LINE_VERSION}"

ENV PATH $PATH:/home/$USER/$ANDROID_HOME/platform-tools

# Others
RUN sudo chown -R $USER $ANDROID_HOME

# Start the adb daemon
RUN adb start-server
