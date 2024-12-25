JAR_PATH = D:\Java Projects\Spring Projects\Botanify\build\libs
JAR_FILE = Botanify-0.0.1-SNAPSHOT.jar

backend:
	@echo "Running Botanify BE"
	java -jar "$(JAR_PATH)\$(JAR_FILE)"